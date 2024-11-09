import { useParams } from 'react-router-dom'
function Profile() {
    const params = useParams();
  return (
    <div>
    <div>Profile {params.id}</div>
    </div>
  )
}

export default Profile