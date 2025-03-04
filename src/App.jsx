import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions, loadRestaurants } from './actions';

import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantContainer from './RestaurantsContainer';
import isEmpty from './utils';

export default function App() {
  const dispatch = useDispatch();

  const { regionName, categoryId } = useSelector((state) => ({
    regionName: state.selectedRegion.name,
    categoryId: state.selectedCategory.id,
  }));

  useEffect(() => {
    if (isEmpty(regionName) || isEmpty(categoryId)) {
      return;
    }

    dispatch(loadRestaurants(regionName, categoryId));
  }, [regionName, categoryId]);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </>
  );
}
