import StudentCard from './StudentCard';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F2F1',
      }}
    >
      <StudentCard
        name="Emily Clark"
        major="Information Systems"
        year="Sophomore"
        bio="Passionate about learning full-stack development and cloud technologies. I enjoy coding and reading tech blogs."
        imageUrl="https://via.placeholder.com/110"
      />
    </div>
  );
}

export default App;
