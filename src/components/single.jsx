
import { useParams } from 'react-router-dom';

export default function Single() {
    let { id } = useParams();
    console.log(id);
  return (
    <div>Single</div>
  )
}




