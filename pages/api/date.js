import { Photon } from '@prisma/photon'

const photon = new Photon({})

export default async (req, res) => {
  const data = await photon.users.findMany()
  res.json({ date: data.length })
}
