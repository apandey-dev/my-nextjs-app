/**
 * Custom Next.js API Route
 * Handles GET /api/hello and returns a greeting JSON payload.
 *
 * @param {import('next').NextApiRequest} req - The incoming HTTP request
 * @param {import('next').NextApiResponse} res - The outgoing HTTP response
 */
export default function handler(req, res) {
  // Return the required assignment JSON response
  res.status(200).json({
    message: "Hello from Next.js API Route!"
  });
}
