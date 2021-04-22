import { Child } from './Child';

const Parent = () => {
  return <Child color="red" onclick={() => console.log('on click')} />;
};

export default Parent;
