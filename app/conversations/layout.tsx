import getConversations from "../actions/getConversations";
import Sidebar from "../components/sideber/Sideber";
import ConversationList from "./componente/ConversationList";

export default async function ConversationsLayout({
    children
}:{
    children: React.ReactNode
}) {
    const conversations = await getConversations();

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
};