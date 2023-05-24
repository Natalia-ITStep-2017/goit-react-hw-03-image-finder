import { ColorRing } from 'react-loader-spinner';


const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        left: "49%",
        bottom: "60%"
      }}
      wrapperClass="blocks-wrapper"
      colors={['#303f9f', '#3f51b5', '#1839f2', '#303f9f']}
    />)
}

export default Loader