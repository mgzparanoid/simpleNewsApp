import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { config } from "../config/config";
import { setArticlesCount } from "../store/newsSlice";
import { RootState } from "../store/store";
import { getNews, Article } from "../utils/api/get-news";
import { isResultError } from "../utils/api/handle-error";

const Content: React.FC = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState<string>(
    config.initialCountry
  );
  const layout = useSelector((state: RootState) => state.layout.layoutState);
  const dispatch = useDispatch();
  const location = useLocation();

  const [data, setData] = useState<Article[]>();
  const [isNewsDialogOpen, setIsNewsDialogOpen] = useState<boolean>(false);
  const [dialogIndex, setDialogIndex] = useState<number | undefined>(undefined);

  const fetchNews = async (countryCode: string) => {
    const res = await getNews(countryCode);
    if (!isResultError(res)) {
      dispatch(setArticlesCount(res.data));
      setData(res.data);
    } else {
      console.log(res);
    }
  };

  useEffect(() => {
    fetchNews(currentCountryCode !== undefined ? currentCountryCode : "pl");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCountryCode]);

  useEffect(() => {
    setCurrentCountryCode(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <>
      {data !== undefined &&
        (layout === "list" ? (
          data!.map((el, index) => (
            <List>
              <ListItem
                key={index}
                onClick={() => {
                  setIsNewsDialogOpen(true);
                  setDialogIndex(index);
                }}
              >
                Title: {el.title}
                <br />
                Source: {el.source.name}
                <br />
                Published: {el.publishedAt.substring(0, 10)}
              </ListItem>
            </List>
          ))
        ) : (
          <Grid container sx={{ minWidth: "400px" }} spacing={2}>
            {data!.map((el, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ maxWidth: "100%" }}
                  onClick={() => {
                    setIsNewsDialogOpen(true);
                    setDialogIndex(index);
                  }}
                >
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title={el.title}
                    subheader={el.publishedAt.substring(0, 10)}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={el.urlToImage || ""}
                    alt={el.urlToImage ? "Loaded picture" : "No picture"}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {el.description || "No description"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}

      {data !== undefined && dialogIndex !== undefined && (
        <Dialog
          open={isNewsDialogOpen}
          onClose={() => setIsNewsDialogOpen(false)}
          maxWidth="md"
        >
          <DialogTitle>{data![dialogIndex].title}</DialogTitle>
          <DialogContent>
            Description: {data![dialogIndex].description || "No description"}
            <br />
            Author: {data![dialogIndex].author}
            <br />
            URL: <Link to={data![dialogIndex].url}> Link to article</Link>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsNewsDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
export default Content;
