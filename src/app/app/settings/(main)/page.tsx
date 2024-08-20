import { auth } from '@/services/auth'
import { ProfileForm } from './_components/form'

export default async function Page() {
  const sessions = await auth()

  return <ProfileForm defaultValue={sessions?.user} />
}
