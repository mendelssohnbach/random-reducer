// Parent Component
const Parent = ({ children }: { children: React.ReactNode }) => {
  console.log('Dashboard render');
  return (
    <div className="comp">
      Dashboard
      {children}
    </div>
  );
};

export default Parent;
