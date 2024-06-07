import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';

export default function SideBar(props) {
  /* ADIM 4: App component'inden gelen propları burada destruct edelim. aynı isimlerle kullanalım */
  const [categories, setCategories] = useState([]);
  const { category, handleCatChange } = props;
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="side-container">
      <h2>Categories</h2>
      <CategoryList
        categories={categories}
        category={category}
        handleCatChange={handleCatChange}
      />
    </div>
  );
}
