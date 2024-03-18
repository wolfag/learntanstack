import { useSearchParams } from 'react-router-dom';
import { useTnxDetails } from '@/hooks';

export const TnxDetails = () => {
  const [searchParams] = useSearchParams();
  const tnxId = searchParams.get('tnxId') || '';

  const { data, isLoading, isError, error } = useTnxDetails(tnxId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!data) return <p>No transaction found.</p>;

  return (
    <div>
      <h2>Transaction ID: {data.id}</h2>
      <p>Amount: {data.amount}</p>
      <p>Status: {data.status}</p>
    </div>
  );
};
