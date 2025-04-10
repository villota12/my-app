function PollOption({ label, count, onVote }) {
    return (
        <div className="poll-option">
        <button onClick={onVote}>{label}</button>
        <p>{count} vote(s)</p>
        </div>
        );
    }
    
    export default PollOption;