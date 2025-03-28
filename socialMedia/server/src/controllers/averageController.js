export const calculateAverage = (req, res) => {
  const { numberId } = req.params;

  // Validate the numberId (e.g., ensure it's numeric)
  if (!/^\d+$/.test(numberId)) {
    return res.status(400).json({ error: 'Invalid number ID. It must be numeric.' });
  }

  // Example logic: Calculate the average of digits in the numberId
  const digits = numberId.split('').map(Number);
  const average = digits.reduce((sum, digit) => sum + digit, 0) / digits.length;

  res.status(200).json({ numberId, average });
};
