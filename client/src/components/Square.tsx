interface SquareProps {
  value: number | null; // Adjust the type as needed
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  let content: string;
  if (value === 1) {
    content = 'O';
  } else if (value === 0) {
    content = 'X';
  } else {
    content = '';
  }

  return (
    <>
      <div className='flex justify-center items-center rounded-2xl text-3xl h-40 w-40 border' onClick={onSquareClick}>
        {content}
      </div>
    </>
  );
};

export default Square;
