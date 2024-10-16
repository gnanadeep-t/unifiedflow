import Link from "next/link";

export default function Main() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the App Dashboard</h1>
      {[
        { name: "AppFlowy", envKey: "NEXT_PUBLIC_APPFLOWY_URL" },
        { name: "Mattermost", envKey: "NEXT_PUBLIC_MATTERMOST_URL" },
        { name: "Sentrifugo", envKey: "NEXT_PUBLIC_SENTRIFUGO_URL" },
      ].map(({ name, envKey }) => (
        <div key={name} style={{ margin: "20px" }}>
          <Link href={process.env[envKey] || "#"}>
            <p>Go to {name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
