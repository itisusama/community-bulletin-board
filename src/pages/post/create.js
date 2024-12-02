import { databases } from '../../appwrite/config';

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID, 
        'unique()', 
        { title: 'Test Post', description: 'This is a test post' }
      );
      alert('Post created successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required />
      <textarea name="description" placeholder="Description" required />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
