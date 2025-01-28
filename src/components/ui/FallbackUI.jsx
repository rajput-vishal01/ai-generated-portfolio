const FallbackUI = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-primary-dark">
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-light dark:border-accent-dark mx-auto mb-4" />
        <p className="text-lg font-mono">{message}</p>
      </div>
    </div>
  );
};

export default FallbackUI;
