import { Request, Response } from "express";

type Asset =
  | {
      platform: string;
      name: string;
      api_url: string;
      url: string;
      content_type: string;
      size: number;
    }
  | undefined;

export default async function proxyPrivateDownload(
  asset: Asset,
  token: string,
  req: Request,
  res: Response
) {
  const redirect = "manual";
  const headers: HeadersInit = {
    Accept: "application/octet-stream",
    Authorization: `token ${token}`,
  };

  if (!asset) {
    res.status(404).send("Asset not found");
    return;
  }

  const { api_url: rawUrl } = asset;

  // const finalUrl = rawUrl.replace(
  //     'https://api.github.com/',
  //     `https://${token}@api.github.com/`
  // )

  const assetRes = await fetch(rawUrl, {
    headers,
    redirect,
  });

  res.setHeader("Location", assetRes.headers.get("Location") || "");
  res.status(302);
}
