"use client";

import { toast } from "@components/ui/use-toast";

const useRest = () => {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  const updateUsername = async (fullname, userId) => {
    try {
      const res = await fetch("/api/profile", {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ fullname, userId }),
      });

      if(res.ok){
        toast({
            variant: 'green',
            title: "Success!",
            description: 'You have successfully changes your name!'
        })

        setTimeout(() => {
            window.location.reload()
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    updateUsername,
  };
};

export default useRest;
