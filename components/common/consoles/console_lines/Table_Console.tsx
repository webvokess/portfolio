import { useEffect, useState } from "react";
import BodyText from "../../text/BodyText";
import clsx from "clsx";

export interface HeaderProps {
  label: string;
  items: Array<string>;
}

export interface DescriptionProps {
  label: string | React.Component;
  items: Array<{
    prefix: string;
    icon: React.ReactNode;
    label: string | React.ReactNode;
  }>;
}

export interface Table_ConsoleProps {
  headers: HeaderProps;
  descriptions: DescriptionProps;
}

export default function Table_Console({
  headers,
  descriptions,
}: Table_ConsoleProps) {
  const [headersState, setHeadersState] =
    useState<HeaderProps>({ label: "", items: [] });
  const [descriptionState, setDescriptionState] =
    useState<DescriptionProps>({
      label: "",
      items: [
        {
          prefix: "",
          icon: <p></p>,
          label: "",
        },
      ],
    });

  useEffect(() => {
    setHeadersState(headers);
    setDescriptionState(descriptions);
  }, [headers, descriptions]);

  return (
    <div className={clsx("w-full")}>
      <table className={clsx("outline-[1px] ", "w-full")}>
        <thead className={clsx("w-full")}>
          <tr>
            {headersState.items.length > 0 &&
              headersState.items.map((header, index) => (
                <th
                  className={clsx(
                    "text-left",
                    index === 0
                      ? "lg:w-[35%] w-[50%]"
                      : "lg:w-[65%] w-[50%]"
                  )}
                  key={index}>
                  <BodyText
                    color={"text-yellow-700"}
                    uppercase={true}
                    weight='font-600'>
                    {header}
                  </BodyText>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className={clsx("w-full text-left")}>
          {descriptionState.items.map((row, index) => (
            <tr key={index} className={"py-3"}>
              <td className={clsx("py-1")}>
                <BodyText
                  color={"text-white-1000"}
                  uppercase={true}
                  weight='font-300'>
                  {`--${row.prefix}`}
                </BodyText>
              </td>

              <td className='flex h-fit items-center gap-2 py-1'>
                {
                  <div
                    className={clsx(
                      "text-24p text-yellow-900"
                    )}>
                    {row.icon}
                  </div>
                }
                <BodyText
                  color={"text-white-1000"}
                  uppercase={true}
                  weight='font-300'>
                  {row.label}
                </BodyText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
