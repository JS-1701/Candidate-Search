// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    name: string;
    username: string;
    email: string;
    location: string;
    htlml_url: string;
    avatar_url: string;
    bio: string;
    company: string;
}

export default Candidate;