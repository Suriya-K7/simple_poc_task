import { FacebookIcons, GitHubIcons, InstagramIcon, XIcons, YouTubeIcons } from "../assets/SocialMediaIcons";

export default function Footer() {
    const socialIcons = [
        { name: 'Facebook', Icon: FacebookIcons },
        { name: 'Instagram', Icon: InstagramIcon },
        { name: 'X', Icon: XIcons },
        { name: 'GitHub', Icon: GitHubIcons },
        { name: 'YouTube', Icon: YouTubeIcons },
    ];

    return (
        <footer className="bg-white mt-6 mx-auto max-w-7xl px-6  border-t border-gray-900/10 pt-4 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
                {socialIcons.map(({ name, Icon }) => (
                    <span key={name} className="text-gray-600 hover:text-gray-800">
                        <Icon />
                    </span>
                ))}
            </div>
            <p className="mt-8 text-sm text-gray-600 md:order-1 md:mt-0">
                &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
        </footer>
    );
}
