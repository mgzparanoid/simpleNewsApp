export default function getDate(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return(
        <h5>{date}</h5>
    )
}
