import { dateLocaleStringOptions } from "~/util/format";

export default function ArticleHeader({
  datePublished: datePublishedString,
  dateUpdated: dateUpdatedString,
}: {
  datePublished: string;
  dateUpdated?: string;
}) {
  return (
    <div className="flex flex-col w-full items-center text-sm">
      <em>
        published{" "}
        {new Date(datePublishedString).toLocaleString(
          undefined,
          dateLocaleStringOptions
        )}
      </em>

      {dateUpdatedString && (
        <em>
          updated{" "}
          {new Date(dateUpdatedString).toLocaleString(
            undefined,
            dateLocaleStringOptions
          )}
        </em>
      )}
    </div>
  );
}
