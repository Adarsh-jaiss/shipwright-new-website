'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface InstallMethod {
    name: string;
    description: string;
    prerequisites: string[];
    commands: { description: string; command: string }[];
}

export const installMethods: InstallMethod[] = [
    {
        name: "kubectl",
        description: "Direct installation using kubectl with required Tekton pipeline",
        prerequisites: [
            "Kubernetes cluster (v1.27+)",
            "Tekton pipeline (v0.50+)",
        ],
        commands: [
            {
                description: "Install Tekton Pipeline",
                command: "kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.65.0/release.yaml"
            },
            {
                description: "Install Shipwright",
                command: "kubectl apply --filename https://github.com/shipwright-io/build/releases/download/v0.13.0/release.yaml --server-side"
            },
            {
                description: "Install Build Strategies",
                command: "$ kubectl apply -f https://github.com/shipwright-io/build/releases/latest/download/sample-strategies.yaml"
            },
            {
                description: "Setup webhook certificate",
                command: "curl --silent --location https://raw.githubusercontent.com/shipwright-io/build/v0.13.0/hack/setup-webhook-cert.sh | bash"
            }
        ]
    },
    {
        name: "Operator",
        description: "Installation via Operator Lifecycle Manager (OLM)",
        prerequisites: [
            "Kubernetes cluster",
            "Operator Lifecycle Manager (OLM) installed",
        ],
        commands: [
            {
                description: "Install Shipwright Operator",
                command: "kubectl apply -f https://operatorhub.io/install/shipwright-operator.yaml"
            }
        ]
    }
];

export function InstallSection() {
    const [copiedCommands, setCopiedCommands] = useState<{[key: string]: boolean}>({});

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedCommands({...copiedCommands, [text]: true});
        setTimeout(() => {
            setCopiedCommands({...copiedCommands, [text]: false});
        }, 2000);
    };

    return (
        <div id='install-shipwright' className="flex justify-center items-center">
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto max-w-[58rem] space-y-6">
                    <h2 className="text-center font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Install Shipwright
                    </h2>
                    <p className="text-center leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Choose your preferred installation method
                    </p>
                    <Tabs defaultValue={installMethods[0].name.toLowerCase()} className="mt-8">
                        <TabsList className="grid w-full grid-cols-2">
                            {installMethods.map((method) => (
                                <TabsTrigger key={method.name} value={method.name.toLowerCase()}>
                                    {method.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {installMethods.map((method) => (
                            <TabsContent key={method.name} value={method.name.toLowerCase()}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Install with {method.name}</CardTitle>
                                        <CardDescription>{method.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="rounded-lg bg-muted p-4">
                                            <h4 className="font-semibold mb-2">Prerequisites</h4>
                                            <ul className="list-disc list-inside space-y-1">
                                                {method.prerequisites.map((prereq, index) => (
                                                    <li key={index} className="text-sm text-muted-foreground">
                                                        {prereq}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {method.commands.map((cmd, index) => (
                                            <div key={index} className="space-y-2">
                                                <p className="text-sm text-muted-foreground">{cmd.description}</p>
                                                <div className="relative">
                                                    <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                                                        <code className="text-sm">{cmd.command}</code>
                                                    </pre>
                                                    <Button
                                                        variant='secondary'
                                                        size="icon"
                                                        className="absolute right-2 top-2"
                                                        onClick={() => copyToClipboard(cmd.command)}
                                                    >
                                                        {copiedCommands[cmd.command] ? (
                                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                        ) : (
                                                            <Copy className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </div>
    );
}