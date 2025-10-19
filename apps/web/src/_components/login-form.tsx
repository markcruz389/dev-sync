"use client";

import { cn } from "@/_lib/utils";
import { Button } from "@/_components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/_components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/_components/ui/field";
import { Input } from "@/_components/ui/input";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { IconBrandGithub } from "@tabler/icons-react";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { signIn } = useSignIn();

    if (!signIn) return null;

    const signInWithGithub = async () => {
        return signIn
            .authenticateWithRedirect({
                strategy: "oauth_github",
                redirectUrl: "/login/sso-callback",
                redirectUrlComplete: "/login", // Learn more about session tasks at https://clerk.com/docs/guides/development/custom-flows/overview#session-tasks
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err: any) => {
                // See https://clerk.com/docs/guides/development/custom-flows/error-handling
                // for more info on error handling
                console.log(err.errors);
                console.error(err, null, 2);
            });
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <Button
                                    variant="outline"
                                    type="button"
                                    onClick={() => signInWithGithub()}
                                >
                                    <IconBrandGithub />
                                    Login with Github
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
