function StoryTray({ stories }) {
  let storiesToDisplay = stories.slice();   

  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}

export default StoryTray;
