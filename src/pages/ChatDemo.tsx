import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User } from 'lucide-react';
import { chatHistory, products } from '@/data/dummy-data';
import { Link } from 'react-router-dom';

const ChatDemo = () => {
  const [messages, setMessages] = useState(chatHistory);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user' as const,
      content: newMessage,
      timestamp: new Date(),
    };

    const botResponse = {
      id: (Date.now() + 1).toString(),
      sender: 'bot' as const,
      content: "I'd be happy to help you discover more beautiful crafts! Let me find some recommendations for you.",
      timestamp: new Date(),
      productSuggestions: products.slice(0, 2)
    };

    setMessages([...messages, userMessage, botResponse]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-heading font-bold mb-2">AI Shopping Assistant</h1>
          <p className="text-muted-foreground">Discover crafts through conversation</p>
        </div>

        <Card className="h-[600px] flex flex-col shadow-card">
          {/* Chat Messages */}
          <CardContent className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground ml-3' 
                      : 'bg-accent text-accent-foreground mr-3'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>

                    {/* Product suggestions */}
                    {message.productSuggestions && (
                      <div className="space-y-2">
                        {message.productSuggestions.map((product) => (
                          <Link key={product.id} to={`/product/${product.id}`}>
                            <Card className="p-3 hover:shadow-card transition-shadow cursor-pointer">
                              <div className="flex items-center space-x-3">
                                <img 
                                  src={product.image} 
                                  alt={product.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm truncate">{product.title}</h4>
                                  <p className="text-xs text-muted-foreground">by {product.artisan}</p>
                                  <p className="text-sm font-semibold text-primary">₹{product.price}</p>
                                </div>
                              </div>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Suggested Questions */}
          <div className="p-4 border-t border-border">
            <div className="mb-3">
              <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Show me silk sarees under ₹3000",
                  "Find pottery from Gujarat", 
                  "What's trending in handloom?"
                ].map((suggestion) => (
                  <Badge 
                    key={suggestion}
                    variant="secondary" 
                    className="cursor-pointer hover:bg-accent/20 transition-colors"
                    onClick={() => setNewMessage(suggestion)}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Ask about crafts, regions, or artisans..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-hero border-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ChatDemo;