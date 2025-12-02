export default function ChallengeCard(){
    return (
        <div className="card w-full max-w-md preset-filled-primary-300-700 p-4 text-center">
            <header>
                <h2>Challenge 1</h2>
            </header>    
            <article class="space-y-4 p-4">
                <div>
                    <h1 className="h1">Irregular Verbs</h1>
                    <h3 className="h3">10 questions</h3>
                </div>
                <p>
                    Test your knowledge of irregular verbs with this challenge.
                </p>
                <footer>
                    <button>Start Challenge</button>
                </footer>
            </article>
        </div>
    )
}