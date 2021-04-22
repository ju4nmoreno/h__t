const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im being draggable', event);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStartCapture={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
