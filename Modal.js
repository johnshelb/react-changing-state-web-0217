class Modal extends React.Component {
  render() {
    const { isOpen } = this.props;

    return (
      <div className={isOpen ? 'modal modal--is-open' ? 'modal'}>
        <button>close</button>

        <p>Hello! I am a modal.</p>
      </div>
    );
  }
}
