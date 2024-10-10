import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ url: "", alt: "" });

  const ACCESS_KEY = "rAT7tGnUST86IaTyi2EhIG5qt3zy6uzvARLxJcQssyc";

  const openModal = (imageUrl, imageAlt) => {
    setCurrentImage({ url: imageUrl, alt: imageAlt });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSearch = (searchPhoto) => {
    setSearchValue(searchPhoto);
    setPhotos([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!searchValue) return;

      try {
        setLoader(true);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${searchValue}&page=${page}&per_page=20`
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchPhotos();
  }, [searchValue, page]);

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <header>
        <SearchBar onSearch={onSearch} />
      </header>
      <main>
        {loader && <Loader />}
        {error && <ErrorMessage />}
        <ImageGallery photos={photos} onImageClick={openModal} />
        {photos.length > 0 && !loader && (
          <LoadMoreBtn loadMorePhotos={loadMorePhotos} />
        )}
      </main>
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={currentImage.url}
        imageAlt={currentImage.alt}
      />
    </>
  );
}

export default App;
