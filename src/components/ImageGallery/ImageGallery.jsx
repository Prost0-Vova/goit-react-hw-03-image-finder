import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import { getImages } from '../../api/images.service';

export default class ImageGallery extends React.Component {
  state = {
    images: [],
    totalPages:0,

  };

  async componentDidMount() {
    const { total, images } = await getImages();
    this.setState({ totalPages:total, images });
  }

  componentDidUpdate(prevProps, prevState){
  if(prevProps.searchQuery !== this.props.searchQuery){
    const { total, images } = await getImages({searchQuery: this.props.searchQuery});
    this.setState({ totalPages:total, images });
  }


  }

  render() {
    return (
      <ImageList>
        {this.state.images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              url={image.webformatURL}
              largeUrl={image.largeImageURL}
              setlargeImg={setlargeImg}
            />
          );
        })}
      </ImageList>
    );
  }
}

ImageGallery.propTypes = {
    images: propTypes.array,
    setlargeImg: propTypes.func
};