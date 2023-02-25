import { ListItemAvatar, Avatar } from "@mui/material"

interface avatarProps {
  imagen?: string
}

export const ListAvatar = ({ imagen }: avatarProps) => {
  return (
    <ListItemAvatar>
      <Avatar variant='circular' alt="Remy Sharp" src={ imagen } />
    </ListItemAvatar>
  )
}
