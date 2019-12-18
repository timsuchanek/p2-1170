import getMessage from 'dummy-executable-package'

export default async (req, res) => {
  const date = await getMessage()

  res.json({ date })
}
