

interface ErrorStateProps {
  error: string;
}

export default function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="container">
      <div className="card">
        <h3 className="text-accent">Thông báo Lỗi</h3>
        <p>{error}</p>
      </div>
    </div>
  );
}
