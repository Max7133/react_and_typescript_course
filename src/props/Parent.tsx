import { ChildTwo } from './Child';

const Parent = () => {
  return (
    <ChildTwo color="red" onClick={() => console.log('Clicked')}>
      kk
    </ChildTwo>
  );
};

export default Parent;
