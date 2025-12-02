import ChallengeCard from "@/app/components/ChallengeCard";
export default function Challenge ()  {
    return (
        <div style = {{ outline: '1px solid red' }} class="space-y-4">
            <h1>Challenges</h1>
            <ChallengeCard />
        </div>
    )
}