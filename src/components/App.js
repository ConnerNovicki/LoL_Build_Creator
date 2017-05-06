import React from 'react';
import FilterSelector from '../containers/filter_selector';
import BuildPreview from '../containers/build_preview';
import ImageDisplayer from '../containers/image_displayer';
import BuildList from '../containers/build_list';

const App = () => {
  return (
    <div>
      <BuildPreview />
      <FilterSelector />
      <ImageDisplayer />
      <BuildList />
    </div>
  );
}

export default App;
