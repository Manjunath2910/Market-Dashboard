
export default async function handler(req, res) {

  const response = await fetch(
    'https://api.wise.com/v1/rates?source=USD&target=INR',
    {
      headers: {
        Authorization: `Bearer ${process.env.WISE_API_KEY}`
      }
    }
  );

  const data = await response.json();

  res.status(200).json({
    success: true,
    rate: data[0].rate
  });
}

