import { ListItemAvatar, Avatar } from "@mui/material"

interface avatarProps {
  imagen?: string
}

export const ListAvatar = ({ imagen }: avatarProps) => {
  return (
    <ListItemAvatar>
      <Avatar variant='rounded' alt="Remy Sharp" src={ imagen } />
    </ListItemAvatar>
  )
}
