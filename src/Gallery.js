import { postings } from './postings'

function Gallery() {
    let postingMap = postings.map((posting,i)=>{
        return (
            <div className='posting'>
                <label>{posting.price}</label>
                <img src={posting.imageURL}></img>
                <label>☆ </label>
                <label>{new Date().getMonth()}/{new Date().getDate()} </label>
                <label>{posting.title} </label>
                <label>{posting.price}</label>
            </div>
        )
    })
    return (
        <div className='gallery'>
            {postingMap}
        </div>
    )
}

export default Gallery