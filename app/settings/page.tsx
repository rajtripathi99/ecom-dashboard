import NotificationCard from "@/components/settings/NotificationCard";
import ProfileCard from "@/components/settings/ProfileCard"

export default function Settings() {
    return (
        <div className="flex flex-col items-start gap-4">
            <ProfileCard />
            <NotificationCard />
        </div>
    );
}