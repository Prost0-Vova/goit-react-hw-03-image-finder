import React from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader";
import Modal from "./Modal";
import Searchbar from "./Searchbar/Searchbar";
import debounce from "lodash.debounce";



export default class App extends React.Component{
  state = {
    searchQuery: "",
  };

  handleChangeSearchQuery = debounce((searchQuery) => {
    this.setState({
      searchQuery,
    });
  }, 1000);

  
  render(){

   return(
<>
    <Searchbar onChange={this.handleChangeSearchQuery}>
    </Searchbar>
   <ImageGallery searchQuery={this.state.searchQuery}>
    <Button></Button>
   </ImageGallery>
   <Loader></Loader>
   <Modal></Modal>


    </>
  



   );


  }

}