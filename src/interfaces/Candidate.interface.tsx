// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    name: string;
    username: string;
    email: string;
    location: string;
    html_url: string;
    avatar: string;
    bio: string;
    company: string;
}

export default Candidate;