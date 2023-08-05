import propTypes from 'prop-types';
import {Item, Image} from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ id, url, setlargeImg, largeUrl }) {
    return (
        <Item>
            <Image src={url} alt="Image"  onClick={() => {setlargeImg(largeUrl)} }/>
        </Item>
    )
}

ImageGalleryItem.propTypes = {
    id: propTypes.string,
    url: propTypes.string,
    largeUrl: propTypes.string,
    setlargeImg: propTypes.func
}