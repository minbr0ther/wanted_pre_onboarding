import NavigationBar from './components/GNB';
import GlobalStyle from './components/styles/GlobalStyle';
import images from './images/images.json';

function App() {
  const imagesWithBothEnds = () => {
    const imageArray = images.data;
    const firstClone = imageArray[0];
    const lastClone = imageArray[imageArray.length - 1];

    return [lastClone, ...imageArray, firstClone];
  };

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      {console.log(imagesWithBothEnds())}
    </>
  );
}

export default App;
