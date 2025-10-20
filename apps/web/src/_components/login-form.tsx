"use client";

import { cn } from "@/_lib/utils";
import { Button } from "@/_components/ui/button";
import { Card, CardContent } from "@/_components/ui/card";
import { Field, FieldGroup } from "@/_components/ui/field";
import { useSignIn } from "@clerk/nextjs";
import { IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { toast } from "sonner";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { signIn } = useSignIn();
    const [loggingIn, setLoggingIn] = useState(false);

    if (!signIn) return null;

    const signInWithGithub = async () => {
        setLoggingIn(true);
        return signIn
            .authenticateWithRedirect({
                strategy: "oauth_github",
                redirectUrl: "/login/sso-callback",
                redirectUrlComplete: "/dashboard", // Learn more about session tasks at https://clerk.com/docs/guides/development/custom-flows/overview#session-tasks
            })
            .then((res) => {
                console.log(res);
                toast.success(
                    "Successfully signed in with Github!, Please wait to be redirected."
                );
            })
            .catch((err: any) => {
                // See https://clerk.com/docs/guides/development/custom-flows/error-handling
                // for more info on error handling
                console.log(err.errors);
                console.error(err, null, 2);
                toast.error("Failed to sign in with Github. Please try again.");
            })
            .finally(() => {
                setTimeout(() => {
                    setLoggingIn(false);
                }, 3000);
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
                                    disabled={loggingIn}
                                >
                                    {loggingIn ? (
                                        <Spinner className="size-5" />
                                    ) : (
                                        <IconBrandGithub />
                                    )}
                                    {loggingIn ? "Logging in" : "Login"} with
                                    Github
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
