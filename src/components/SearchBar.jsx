import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

const INITIAL_VALUES = {
  searchPhoto: "",
};

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.searchPhoto.trim() === "") {
      toast.error("Need to enter text for image search!");
      return;
    }

    onSearch(values.searchPhoto);
    resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
        <Form className={css.form}>
          <Field
            name="searchPhoto"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
