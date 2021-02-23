import { CoverImg } from './Cover.style';

function Cover({ children, ...props }) {
  return <CoverImg {...props} />;
}

export default Cover;
