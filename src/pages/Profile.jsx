import { useParams } from 'react-router-dom'
import {SearchField, Header} from "../modules/index.js"
function Profile() {
    const params = useParams();
  return (
    <div>
    <div>Profile {params.id}</div>
    </div>
  )
}

export default Profile